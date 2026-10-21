package com.jesosymamonjy.app;

import android.graphics.Color;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;

/**
 * Ny loko voafidin'ny mpampiasa (accent) dia apetraka amin'ny status bar (ambony)
 * sy navigation bar (ambany) an'ny Android. Antsoin'ny index.html: AndroidTheme.set('#rrggbb')
 */
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getBridge().getWebView().addJavascriptInterface(new Object() {
            @JavascriptInterface
            public void set(final String hex) {
                runOnUiThread(() -> {
                    try {
                        int c = Color.parseColor(hex);
                        getWindow().setStatusBarColor(c);
                        getWindow().setNavigationBarColor(c);
                        WindowInsetsControllerCompat ic =
                            WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
                        ic.setAppearanceLightStatusBars(false);
                        ic.setAppearanceLightNavigationBars(false);
                    } catch (Exception ignored) { }
                });
            }
        }, "AndroidTheme");
    }
}
