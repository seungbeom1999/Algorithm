function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const onBridge = Array(bridge_length).fill(0);
  while (onBridge.length > 0) {
    time++;
    onBridge.shift();
    if (truck_weights.length > 0) {
      const passed = onBridge.reduce((prev, curr) => prev + curr, 0);
      if (passed + truck_weights[0] <= weight) {
        onBridge.push(truck_weights.shift());
      } else {
        onBridge.push(0);
      }
    }
  }
  return time;
}
