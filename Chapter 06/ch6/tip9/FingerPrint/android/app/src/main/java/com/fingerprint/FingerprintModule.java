package com.fingerprint;

import android.content.Context;
import android.hardware.fingerprint.FingerprintManager;
import android.os.CancellationSignal;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by stan229 on 7/16/16.
 */

public class FingerprintModule extends ReactContextBaseJavaModule{

    private FingerprintManager fingerprintManager;
    private Fingerprint fingerprint;

    public FingerprintModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);

        fingerprintManager = (FingerprintManager) reactApplicationContext.getSystemService(Context.FINGERPRINT_SERVICE);
        fingerprint = new Fingerprint(fingerprintManager, reactApplicationContext);
    }

    @Override
    public String getName() {
        return "Fingerprint";
    }

    @ReactMethod
    public void authenticate() {
        fingerprint.authenticate();
    }
}
