import Component from "./Component";
import Provider from "./Provider";

export default function ParentComponent() {
  return (
    <Provider>
      <Component />
    </Provider>
  );
}
