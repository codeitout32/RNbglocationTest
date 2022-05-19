import BackgroundFetch from 'react-native-background-fetch';
import getLocation from './getLocation';
import BackgroundService from 'react-native-background-actions';

export const initBackgroundFetch = async setState => {
  // BackgroundFetch event handler.
  const onEvent = async taskId => {
    console.log('[BackgroundFetch] task: ', taskId);
    // Do your background work...
    await addEvent(taskId);
    // IMPORTANT:  You must signal to the OS that your task is complete.
    BackgroundFetch.finish(taskId);
  };

  // Timeout callback is executed when your Task has exceeded its allowed running-time.
  // You must stop what you're doing immediately BackgroundFetch.finish(taskId)
  const onTimeout = async taskId => {
    console.warn('[BackgroundFetch] TIMEOUT task: ', taskId);
    BackgroundFetch.finish(taskId);
  };

  // Initialize BackgroundFetch only once when component mounts.
  let status = await BackgroundFetch.configure(
    {minimumFetchInterval: 2},
    onEvent,
    onTimeout,
  );

  console.log('[BackgroundFetch] configure status: ', status);

  const addEvent = taskId => {
    // Simulate a possibly long-running asynchronous task with a Promise.
    console.log('addevent');
    return new Promise((resolve, reject) => {
      getLocation(setState);
      resolve();
    });
  };
};

// Add a BackgroundFetch event to <FlatList>
const addEvent1 = taskId => {
  // Simulate a possibly long-running asynchronous task with a Promise.
  return new Promise((resolve, reject) => {
    //   this.setState(state => ({
    //     events: [...state.events, {
    //       taskId: taskId,
    //       timestamp: (new Date()).toString()
    //     }]
    //   }));
    resolve();
  });
};

const sleep = time => new Promise(resolve => setTimeout(() => resolve(), time));

// You can do anything in your task such as network requests, timers and so on,
// as long as it doesn't touch UI. Once your task completes (i.e. the promise is resolved),
// React Native will go into "paused" mode (unless there are other tasks running,
// or there is a foreground app).
const veryIntensiveTask = async taskDataArguments => {
  console.log('hello from bgtask');
  // Example of an infinite loop task
  const {delay, setState} = taskDataArguments;
  await new Promise(async resolve => {
    for (let i = 0; BackgroundService.isRunning(); i++) {
      console.log(i);
      await getLocation(setState);
      await sleep(delay);
    }
  });
};

const options = {
  taskName: 'Background.location',
  taskTitle: 'location.tracking',
  taskDesc: 'tracking.location.for',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  color: '#ff00ff',
  linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
  parameters: {
    delay: 10 * 1000,
  },
};

export const bgtask = async setState => {
  await BackgroundService.start(veryIntensiveTask, {
    ...options,
    parameters: {...options.parameters, setState},
  });
  await BackgroundService.updateNotification({
    taskDesc: 'New ExampleTask description',
  });
  // await BackgroundService.stop();
};

// Only Android, iOS will ignore this call
// iOS will also run everything here in the background until .stop() is called
// await BackgroundService.stop();
export const bgtaskstop = () => {
  console.log('task returned');
  BackgroundService.stop();
};
