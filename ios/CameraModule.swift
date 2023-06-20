//
//  CameraModule.swift
//  MyLearning
//
//  Created by Huzaifa Arshad on 16/06/2023.
//


import UIKit
import AVFoundation

@objc(CameraModule)
class CameraModule: NSObject, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
  var resolve: RCTPromiseResolveBlock?
  var reject: RCTPromiseRejectBlock?
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func openCamera(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    self.resolve = resolve
    self.reject = reject
    
    DispatchQueue.main.async {
      let status = AVCaptureDevice.authorizationStatus(for: .video)
      switch status {
      case .authorized:
        self.presentImagePicker(sourceType: .camera)
      case .notDetermined:
        AVCaptureDevice.requestAccess(for: .video) { granted in
          if granted {
            self.presentImagePicker(sourceType: .camera)
          } else {
            self.reject?("CAMERA_PERMISSION_DENIED", "Camera permission denied.", nil)
          }
        }
      default:
        self.reject?("CAMERA_PERMISSION_DENIED", "Camera permission denied.", nil)
      }
    }
  }
  
  func presentImagePicker(sourceType: UIImagePickerController.SourceType) {
    DispatchQueue.main.async {
      let imagePicker = UIImagePickerController()
      imagePicker.delegate = self
      imagePicker.sourceType = sourceType
      imagePicker.allowsEditing = true
      imagePicker.showsCameraControls=true
      
      
      if UIImagePickerController.isCameraDeviceAvailable(.rear) {
        imagePicker.cameraDevice = .rear
      }
      
      if let rootViewController = UIApplication.shared.keyWindow?.rootViewController {
        rootViewController.present(imagePicker, animated: true, completion: nil)
      }
    }
  }
  
  func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
    if let image = info[UIImagePickerController.InfoKey.originalImage] as? UIImage {
      let temporaryDirectory = NSTemporaryDirectory()
      let fileName = "photo_\(Int(Date().timeIntervalSince1970)).jpg"
      let filePath = temporaryDirectory.appending(fileName)
      let fileURL = URL(fileURLWithPath: filePath)
      
      if let imageData = image.jpegData(compressionQuality: 1.0) {
        do {
          try imageData.write(to: fileURL)
          self.resolve?(fileURL.absoluteString)
        } catch {
          self.reject?("SAVE_PHOTO_FAILED", "Failed to save photo.", error)
        }
      } else {
        self.reject?("CAPTURE_PHOTO_FAILED", "Failed to capture photo.", nil)
      }
    } else {
      self.reject?("CAPTURE_PHOTO_FAILED", "Failed to capture photo.", nil)
    }
    
    picker.dismiss(animated: true, completion: nil)
  }
  
  func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
    self.reject?("USER_CANCELLED", "User cancelled the operation.", nil)
    picker.dismiss(animated: true, completion: nil)
  }
}
