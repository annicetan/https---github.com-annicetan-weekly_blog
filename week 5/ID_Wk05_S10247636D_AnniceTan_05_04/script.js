/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
 class Backpack {
    constructor(
      name,
      volume,
      color,
      pocketNum,
      strapLengthL,
      strapLengthR,
      lidOpen,
      dateAcquired,
      image
    ) {
      this.name = name;
      this.volume = volume;
      this.color = color;
      this.pocketNum = pocketNum;
      this.strapLength = {
        left: strapLengthL,
        right: strapLengthR,
      };
      this.lidOpen = lidOpen;
      this.dateAcquired = dateAcquired;
      this.image = image;
    }
    toggleLid(lidStatus) {
      this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    }
    backpackAge() {
      let now = new Date();
      let acquired = new Date(this.dateAcquired);
      let elapsed = now - acquired; // elapsed time in milliseconds
      let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
      return daysSinceAcquired;
    }
  }
  export default Backpack;
  
  const content = `
    <article class="backpack" id="pack01">
          <figure class="backpack__image">
            <img src="../../assets/images/everyday.svg" alt="" loading="lazy" />
          </figure>
          <h1 class="backpack__name">Everyday Backpack</h1>
          <ul class="backpack__features">
            <li class="feature backpack__volume">Volume:<span> 30l</span></li>
            <li class="feature backpack__color">Color:<span> grey</span></li>
            <li class="feature backpack__age">Age:<span> 684 days old</span></li>
            <li class="feature backpack__pockets">
              Number of pockets:<span> 15</span>
            </li>
            <li class="feature backpack__strap" data-side="left">
              Left strap length: <span>26 inches</span>
              <form class="leftlength" data-children-count="1">
                <input
                  type="number"
                  name="leftLength"
                  placeholder="New left length"
                />
                <button>Update</button>
              </form>
            </li>
            <li class="feature backpack__strap" data-side="right">
              Right strap length: <span>26 inches</span>
              <form class="rightlength" data-children-count="1">
                <input
                  type="number"
                  name="rightLength"
                  placeholder="New right length"
                />
                <button>Update</button>
              </form>
            </li>
            <li class="feature backpack__lid">Lid status: <span>closed</span></li>
          </ul>
          <button class="lid-toggle">Open lid</button>
        </article>
        <article class="backpack" id="pack02">
          <figure class="backpack__image">
            <img src="../../assets/images/frog.svg" alt="" loading="lazy" />
          </figure>
          <h1 class="backpack__name">Frog Backpack</h1>
          <ul class="backpack__features">
            <li class="feature backpack__volume">Volume:<span> 8l</span></li>
            <li class="feature backpack__color">Color:<span> green</span></li>
            <li class="feature backpack__age">Age:<span> 369 days old</span></li>
            <li class="feature backpack__pockets">
              Number of pockets:<span> 3</span>
            </li>
            <li class="feature backpack__strap" data-side="left">
              Left strap length: <span>10 inches</span>
              <form class="leftlength" data-children-count="1">
                <input
                  type="number"
                  name="leftLength"
                  placeholder="New left length"
                />
                <button>Update</button>
              </form>
            </li>
            <li class="feature backpack__strap" data-side="right">
              Right strap length: <span>10 inches</span>
              <form class="rightlength" data-children-count="1">
                <input
                  type="number"
                  name="rightLength"
                  placeholder="New right length"
                />
                <button>Update</button>
              </form>
            </li>
            <li class="feature backpack__lid">Lid status: <span>closed</span></li>
          </ul>
          <button class="lid-toggle">Open lid</button>
        </article>
        `;
  document.body.innerHTML = content;
  