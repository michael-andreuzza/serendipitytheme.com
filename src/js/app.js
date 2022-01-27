function noticesHandler() {
        return {
          notices: [],
          visible: [],
          add(notice) {
            notice.id = Date.now();
            this.notices.push(notice);
            this.fire(notice.id);
          },
          fire(id) {
            this.visible.push(this.notices.find((notice) => notice.id == id));
            const timeShown = 2000 * this.visible.length;
            setTimeout(() => {
              this.remove(id);
            }, timeShown);
          },
          remove(id) {
            const notice = this.visible.find((notice) => notice.id == id);
            const index = this.visible.indexOf(notice);
            this.visible.splice(index, 1);
          },
        };
      }

      // Copy clipboard
      new ClipboardJS(".copy-button");
      var clipboard = new ClipboardJS(".copy-button");
      clipboard.on("success", function (e) {
        console.info("Action:", e.action);
        console.info("Text:", e.text);
        console.info("Trigger:", e.trigger);
        e.clearSelection();
      });
      clipboard.on("error", function (e) {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
      });