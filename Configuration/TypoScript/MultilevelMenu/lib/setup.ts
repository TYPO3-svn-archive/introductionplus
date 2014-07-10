lib.navigation {
  main {
    10 {
      2 {
        IFSUB < lib.navigation.main.10.1.IFSUB
        IFSUB {
          wrapItemAndSub = <li class="dropdown dropdown-submenu">|</li>
        }
        ACTIFSUB < lib.navigation.main.10.1.ACTIFSUB
        ACTIFSUB {
          wrapItemAndSub = <li class="dropdown dropdown-submenu">|</li>
        }
        CURIFSUB < lib.navigation.main.10.1.CURIFSUB
        CURIFSUB {
          wrapItemAndSub = <li class="dropdown dropdown-submenu">|</li>
        }
      }
      3 < .2
      4 < .2
      5 < .2
    }
  }
}
lib.navigation.main.10.2 = TEXT