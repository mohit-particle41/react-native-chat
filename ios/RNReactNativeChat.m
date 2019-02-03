
#import "RNReactNativeChat.h"

@implementation RNReactNativeChat

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(pingMe:(RCTResponseSenderBlock)callback)
{
    NSString *str = @"Testing Chat";
    RCTLogInfo(@"Pretending to create an event Mohit@ at Sam@");
    callback(@[str]);
}

@end
  