#import "DeviceUptime.h"
#import <React/RCTLog.h>

@implementation DeviceUptime

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getUptime:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSTimeInterval uptime = [[NSProcessInfo processInfo] systemUptime];
  resolve([NSString stringWithFormat:@"%f", uptime]);  
}

@end
