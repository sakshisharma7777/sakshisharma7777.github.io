const el = document.querySelector(".el");
let s = 1;

el.addEventListener("click", () => {
  /*
    1
  */
  if (el.classList.contains("state-1")) {
    el.classList.remove("state-1");
    el.classList.add("state-2");
  } else if (el.classList.contains("state-2")) {
    el.classList.remove("state-2");
    el.classList.add("state-3");
  } else {
    el.classList.remove("state-3");
    el.classList.add("state-1");
  }

  /*
    2
  */
  // const STATE_1 = "state-1";
  // const STATE_2 = "state-2";
  // const STATE_3 = "state-3";
  // if (el.classList.contains(STATE_1)) {
  //   el.classList.remove(STATE_1);
  //   el.classList.add(STATE_2);
  // } else if (el.classList.contains(STATE_2)) {
  //   el.classList.remove(STATE_2);
  //   el.classList.add(STATE_3);
  // } else {
  //   el.classList.remove(STATE_3);
  //   el.classList.add(STATE_1);
  // }

  /*
    3
  */
  // const oldN = +/\bstate-(\d+)\b/.exec(el.getAttribute("class"))[1];
  // const newN = oldN >= 3 ? 1 : oldN + 1;
  // el.classList.remove(`state-${oldN}`);
  // el.classList.add(`state-${newN}`);

  /*
    4
  */
  // const classes = ["state-1", "state-2", "state-3"];
  //   const activeIndex = classes.findIndex((c) => el.classList.contains(c));
  //   const nextIndex = (activeIndex + 1) % classes.length;

  // el.classList.remove(classes[activeIndex]);
  // el.classList.add(classes[nextIndex]);

  // el.classList.replace(classes[activeIndex], classes[nextIndex]);

  /*
    4.5
  */
  // const states = ["state-1", "state-2", "state-3"];
  // const current = [...el.classList].find((cls) => states.includes(cls));
  // const next = states[(states.indexOf(current) + 1) % states.length];
  // el.classList.remove(current);
  // el.classList.add(next);

  /*
    5
  */
  // el.classList.remove(`state-${s + 1}`);
  // s = (s + 1) % 3;
  // el.classList.add(`state-${s + 1}`);

  /*
    6
  */
  // el.classList.replace("state-1", "state-2") ||
  //   el.classList.replace("state-2", "state-3") ||
  //   el.classList.replace("state-3", "state-1");

  /*
    7
  */
  //el.dataset.state = (+el.dataset.state % 3) + 1;

  /*
    8
  */
  // const simpleMachine = {
  //   "1": "2",
  //   "2": "3",
  //   "3": "1"
  // };
  // el.dataset.state = simpleMachine[el.dataset.state];

  /*
    9
  */
  //   const rotator = (classes) => ({ classList }) => {
  //     const current = classes.findIndex((cls) => classList.contains(cls));
  //     classList.remove(...classes);
  //     classList.add(classes[(current + 1) % classes.length]);
  //   };

  //   const rotate = rotator(["state-1", "state-2", "state-3"]);
  //   rotate(el);
});