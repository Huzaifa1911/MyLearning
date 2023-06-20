//
//  CameraModule.m
//  MyLearning
//
//  Created by Huzaifa Arshad on 16/06/2023.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"


@interface RCT_EXTERN_MODULE(CameraModule, NSObject)

RCT_EXTERN_METHOD(openCamera: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                )
@end
