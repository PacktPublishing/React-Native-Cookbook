package com.fingerprint;

import android.hardware.fingerprint.FingerprintManager;
import android.os.CancellationSignal;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by stan229 on 7/16/16.
 */
public class Fingerprint extends FingerprintManager.AuthenticationCallback {

    private FingerprintManager fingerprintManager;
    private FingerprintManager.CryptoObject cryptoObject;
    private CancellationSignal cancellationSignal;

    private ReactContext reactContext;

    public Fingerprint(FingerprintManager fingerprintManager, ReactContext reactContext) {
        this.fingerprintManager = fingerprintManager;
        this.reactContext = reactContext;
    }

    public void setCryptoObject(FingerprintManager.CryptoObject cryptoObject) {
        this.cryptoObject = cryptoObject;
    }


    public void authenticate() {
        cancellationSignal = new CancellationSignal();
        fingerprintManager.authenticate(cryptoObject, cancellationSignal, 0, this, null);

        WritableMap params = Arguments.createMap();
        params.putString("authStatus", "Waiting for fingerprint");
        sendEvent("authStatus", params);
    }

    @Override
    public void onAuthenticationError(int errorCode, CharSequence errString) {
        System.out.println("error");

        WritableMap params = Arguments.createMap();
        params.putString("authStatus", "An error has occurred");
        sendEvent("authStatus", params);

    }

    @Override
    public void onAuthenticationFailed() {
        WritableMap params = Arguments.createMap();
        params.putString("authStatus", "Invalid fingerprint");
        sendEvent("authStatus", params);
    }

    @Override
    public void onAuthenticationSucceeded(FingerprintManager.AuthenticationResult result) {
        WritableMap params = Arguments.createMap();
        params.putString("authStatus", "Authentication Successful!");
        sendEvent("authStatus", params);

    }

    @Override
    public void onAuthenticationHelp(int helpCode, CharSequence helpString) {
        System.out.println("help");
    }

    private void sendEvent(String eventName, WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
