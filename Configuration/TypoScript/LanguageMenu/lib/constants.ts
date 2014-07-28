introductionplus {
  lib {
    nav {
      language {
        override {
          # cat=introduction plus - language menu/100/100; type=string; label=Text Menu:List of menu labels devided by a double pipe. Needed if you are using the language text menu. Not needed in case of the language icon menu. I.e: English || Deutsch || Francoise
          text            = English || Deutsch
          # cat=introduction plus - language menu/100/100; type=string; label=Icon Menu:List of menu with icons devided by a double pipe. Needed if you are using the language icons menu. Not needed in case of the language text menu.
          icons           = <img src="typo3/gfx/flags/gb.gif" alt="English" title="English"/> || <img src="typo3/gfx/flags/de.gif" alt="German" title="German"/>
        }
        # cat=introduction plus - language menu/100/101; type=string; label=Enabled menus:List of menu ids devided by a comma. I.e: 0,1,2
        special           = 0,1
        # cat=introduction plus - language menu/100/102; type=string; label=Parameter:List of language parameter devided by a double pipe. I.e: &L=0 || &L=1 || &L=2
        additionalParams  = &L=0 || &L=1
      }
    }
  }
}