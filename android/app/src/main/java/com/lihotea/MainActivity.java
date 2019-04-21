package com.lihotea;

import android.graphics.Color;
import android.view.View;

import com.facebook.react.ReactActivity;
import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
    @Override
    protected void addDefaultSplashLayout() {
        super.addDefaultSplashLayout();
        setContentView(new View(this));
    }
}