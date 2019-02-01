using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Native.Chat.RNReactNativeChat
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeChatModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeChatModule"/>.
        /// </summary>
        internal RNReactNativeChatModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeChat";
            }
        }
    }
}
