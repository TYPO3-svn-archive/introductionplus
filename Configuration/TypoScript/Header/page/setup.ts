XXpage {
  // Move bootstrap template from 10 to 20
  20 < page.10
  10 >
}

XXpage {
  10 = FLUIDTEMPLATE
  10 {
    file {
      stdWrap {
        cObject = TEXT
        cObject {
          value = EXT:introductionplus/Resources/Private/Templates/Page/Default.html
          insertData = 1
        }
      }
    }
    partialRootPath     = {$page.fluidtemplate.partialRootPath}
    layoutRootPath      = {$page.fluidtemplate.layoutRootPath}
  }
}