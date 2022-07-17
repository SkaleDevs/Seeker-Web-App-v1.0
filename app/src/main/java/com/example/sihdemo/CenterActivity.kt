package com.example.sihdemo

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.TypedValue
import androidx.appcompat.app.ActionBar
import androidx.appcompat.app.ActionBarDrawerToggle
import androidx.core.view.GravityCompat
import androidx.databinding.DataBindingUtil
import androidx.drawerlayout.widget.DrawerLayout
import androidx.fragment.app.Fragment
import androidx.fragment.app.commit
import com.example.sihdemo.databinding.ActivityCenterBinding
import com.google.android.material.navigation.NavigationView

class CenterActivity : AppCompatActivity() {
    lateinit private var mBinding: ActivityCenterBinding
    lateinit private var mDrawer: DrawerLayout
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        var menuIdentifier:Int = -9999
        intent.getIntExtra("type",-9999).let{
            menuIdentifier = it
        }
        mBinding = DataBindingUtil.setContentView(this,R.layout.activity_center)
        val toolbar = mBinding.toolbar
        setSupportActionBar(toolbar)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setHomeButtonEnabled(true)
        mDrawer = mBinding.drawerLayout
        mBinding.navView.apply{
            menu.clear()
            when(menuIdentifier){
                1-> inflateMenu(R.menu.menu)
                2-> inflateMenu(R.menu.menu_admin)
                3->inflateMenu(R.menu.menu_stake)
            }
            setNavigationItemSelectedListener {
                when(it.itemId){
                    R.id.account_item->{inflateFragment(AccountFragment::class.java)}
                    R.id.account_item_2->{inflateFragment(AccountFragment2::class.java)}
                    R.id.dashboard_item->{inflateFragment(DashboardFragment::class.java)}
                }
                true
            }
        }
        val toggle = ActionBarDrawerToggle(this,mDrawer,toolbar,R.string.navigation_drawer_open,R.string.navigation_drawer_close)
        toggle.drawerArrowDrawable.color = getColor(R.color.black)
        toggle.syncState()
    }
    fun setThemeDark():Int{
        val typedTheme = TypedValue()
        this.theme.apply{
            resolveAttribute(R.attr.hamburg_tint,typedTheme,true)
        }
        return typedTheme.resourceId
    }
    override fun onBackPressed() {
        if (mDrawer.isDrawerOpen(GravityCompat.START)) {
            mDrawer.closeDrawer(GravityCompat.START)
        } else {
            super.onBackPressed()
        }
    }
    fun <T: Fragment> inflateFragment(className:Class<T>, args:Bundle?=null){
        supportFragmentManager.commit{
            replace(R.id.container,className,args)
        }
    }
}