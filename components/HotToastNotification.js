import React from "react";
import toast, { useToaster } from "react-hot-toast";

export default function HotToastNotifications(props) {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 10,
          right: 10,
          zIndex: 200,

        }}
        onMouseEnter={startPause}
        onMouseLeave={endPause}
      >
        {toasts.map((toast) => {
          const offset = calculateOffset(toast.id, {
            reverseOrder: false,
            margin: 10,
          });
          const ref = (el) => {
            if (el && !toast.height) {
              const height = el.getBoundingClientRect().height;
              updateHeight(toast.id, height);
            }
          };
          return (
            <div
              id="toast-success"
              class="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert"
            >
              <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Check icon</span>
              </div>
              <div class="ml-3 text-sm font-normal">
              {toast.message}
              </div>

              <button
                type="button"
                class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success"
                aria-label="Close"
              >
                <span class="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            // <div
            //   role="alert"
            //   aria-label="notification"
            //   key={toast.id}
            //   ref={ref}
            //   style={{
            //     position: "absolute",
            //     width: "13rem",
            //     padding: ".7rem",
            //     background: "rgba(175, 75, 62, 0.1)",
            //     borderRadius: "3rem",
            //     transition: "all 0.2s",
            //     transform: `translateY(${offset}px)`,
            //     opacity: toast.visible ? 1 : 0
            //   }}
            // >
            //   {toast.message}
            // </div>
          );
        })}
      </div>
    </>
  );
}

// export default function App() {
//   return (
//     <div className="App">
//       <HotToastNotifications />
//       <input placeholder="Write your toast here..." />
//       <button onClick={() => toast("🛎 Toast message sent!")}>
//         Send a hot toast 🍞
//       </button>
//     </div>
//   );
// }
