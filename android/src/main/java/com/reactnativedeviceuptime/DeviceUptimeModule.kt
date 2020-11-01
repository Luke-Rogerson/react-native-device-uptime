package com.reactnativedeviceuptime

import android.os.SystemClock
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class DeviceUptimeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "DeviceUptime"
    }

    @ReactMethod
    fun getUptime(promise: Promise) {
      var uptime = SystemClock.elapsedRealtime().toString()
      promise.resolve(uptime)
    }


}
