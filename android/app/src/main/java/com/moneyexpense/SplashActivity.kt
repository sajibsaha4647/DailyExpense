package com.moneyexpense

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.appcompat.app.AppCompatActivity


class SplashActivity : AppCompatActivity() {
    private val handler: Handler = Handler()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)

        handler.postDelayed(Runnable {
           val intent = Intent(this@SplashActivity, MainActivity::class.java)
            startActivity(intent)
        }, 3000)
    }
}