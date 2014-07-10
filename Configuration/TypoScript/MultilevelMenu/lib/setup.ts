lib.navigation {
  main {
    10 {
      2 {
        IFSUB < lib.navigation.main.10.1.IFSUB
        IFSUB {
          wrapItemAndSub  = <li class="dropdown dropdown-submenu">|</li>
          allWrap         = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|</a> <span class="glyphicon glyphicon-chevron-right"></span>
        }
        ACTIFSUB < lib.navigation.main.10.1.ACTIFSUB
        ACTIFSUB {
          wrapItemAndSub = <li class="dropdown dropdown-submenu">|</li>
          allWrap         = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|</a> <span class="glyphicon glyphicon-chevron-right"></span>
        }
        CURIFSUB < lib.navigation.main.10.1.CURIFSUB
        CURIFSUB {
          wrapItemAndSub = <li class="dropdown dropdown-submenu">|</li>
          allWrap         = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|</a> <span class="glyphicon glyphicon-chevron-right"></span>
        }
      }
      3 < .2
      4 < .2
      5 < .2
    }
  }
}