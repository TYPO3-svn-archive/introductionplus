introductionplus {
  topbar {
    columns {
      width {
        left = TEXT
        left {
          value = {$introductionplus.topbar.columns.width.left}
        }
        center = TEXT
        center {
          value = {$introductionplus.topbar.columns.width.center}
        }
        right = TEXT
        right {
          value = {$introductionplus.topbar.columns.width.right}
        }
      }
    }
    folders {
      left < styles.content.get
      left {
        select {
          pidInList = {$introductionplus.topbar.folders.left}
        }
      }
      center < styles.content.get
      center {
        select {
          pidInList = {$introductionplus.topbar.folders.center}
        }
      }
      right < styles.content.get
      right {
        select {
          pidInList = {$introductionplus.topbar.folders.right}
        }
      }
    }
  }
}