### Task Queues
- Every browser can have multiple task queues.
- So the browser will manage these task as such;
1 - Tasks from the same Task Queue are executed in order they arrived.
2 - Tasks of the same type should go to the same Task Queue
- Browsers have special queue called micro task

### Micro Task
#### How to Create Microtasks
- Promises
- queueMicrotask(callback)
#### Rules of a Microtask Queue
- JS engine checks Microtask Queue every time a Call Stack becomes empty.
- If there are multi microtasks in the Microtask Queue, all of them must be executed before Rendering Pipeline can run.
- If you add more Microtasks while previous Microtasks are running, these new Microtasks will also have to run before the Rendering pipeline.

### Animation Frame Queue
- You can add tasks to Animation Frame Queue by invoking requestAnimationFrame(callback)
- If there are multi tasks in Animation Frame Queue, all of them will be executed during browser repaint time.
- However, if you add more tasks to Animation Queue during this process, they will have to wait until the next iteration.

Browser Rendering Pipeline: 60fps