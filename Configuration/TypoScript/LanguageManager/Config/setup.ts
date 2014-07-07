#############################
#### LANGUAGE SETTINGS   ####
#############################

config {
  sys_language_uid                    = {$introductionplus.config.language.0.uid}
  sys_language_overlay                = 1
  sys_language_mode                   = content_fallback
  language                            = {$introductionplus.config.language.0.iso}
  locale_all                          = {$introductionplus.config.language.0.locale}
  htmlTag_setParams                   = lang="{$introductionplus.config.language.0.iso}" dir="{$introductionplus.config.language.0.iso}" class="no-js"
}

#############################
#### LANGUAGE CONDITIONS ####
#############################
[global]
[globalVar = GP:L = {$introductionplus.config.language.1.uid}]
config {
    sys_language_uid                    = {$introductionplus.config.language.1.uid}
    language                            = {$introductionplus.config.language.1.language}
    locale_all                          = {$introductionplus.config.language.1.iso}
    htmlTag_setParams                   = lang="{$introductionplus.config.language.1.iso}" dir="{$introductionplus.config.language.1.iso}" class="no-js"
}
[global]
[globalVar = GP:L = {$introductionplus.config.language.2.uid}]
config {
    sys_language_uid                    = {$introductionplus.config.language.2.uid}
    language                            = {$introductionplus.config.language.2.language}
    locale_all                          = {$introductionplus.config.language.2.iso}
    htmlTag_setParams                   = lang="{$introductionplus.config.language.2.iso}" dir="{$introductionplus.config.language.2.iso}" class="no-js"
}
[global]
[globalVar = GP:L = {$introductionplus.config.language.3.uid}]
config {
    sys_language_uid                    = {$introductionplus.config.language.3.uid}
    language                            = {$introductionplus.config.language.3.language}
    locale_all                          = {$introductionplus.config.language.3.iso}
    htmlTag_setParams                   = lang="{$introductionplus.config.language.3.iso}" dir="{$introductionplus.config.language.3.iso}" class="no-js"
}
[global]
[globalVar = GP:L = {$introductionplus.config.language.4.uid}]
config {
    sys_language_uid                    = {$introductionplus.config.language.4.uid}
    language                            = {$introductionplus.config.language.4.language}
    locale_all                          = {$introductionplus.config.language.4.iso}
    htmlTag_setParams                   = lang="{$introductionplus.config.language.4.iso}" dir="{$introductionplus.config.language.4.iso}" class="no-js"
}
[global]
[globalVar = GP:L = {$introductionplus.config.language.5.uid}]
config {
    sys_language_uid                    = {$introductionplus.config.language.5.uid}
    language                            = {$introductionplus.config.language.5.language}
    locale_all                          = {$introductionplus.config.language.5.iso}
    htmlTag_setParams                   = lang="{$introductionplus.config.language.5.iso}" dir="{$introductionplus.config.language.5.iso}" class="no-js"
}
[global]
[globalVar = GP:L = {$introductionplus.config.language.6.uid}]
config {
    sys_language_uid                    = {$introductionplus.config.language.6.uid}
    language                            = {$introductionplus.config.language.6.language}
    locale_all                          = {$introductionplus.config.language.6.iso}
    htmlTag_setParams                   = lang="{$introductionplus.config.language.6.iso}" dir="{$introductionplus.config.language.6.iso}" class="no-js"
}
[global]