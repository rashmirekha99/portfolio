import React, { useEffect, useRef } from "react";
import { Button, message } from "antd";

function AlertMessage({ type = "", content }) {
  const [messageApi, contextHolder] = message.useMessage();
  const isMessageShown = useRef(false); // Track if the message has already been shown

  useEffect(() => {
    if (!isMessageShown.current) {
      // Show the message only once
      messageApi.open({
        type: type,
        content: content,
        duration: 2,
      });
      isMessageShown.current = true; // Mark as shown
    }
  }, [messageApi]);
  return <>{contextHolder}</>;
}

export default AlertMessage;
