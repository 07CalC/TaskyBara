import { useProjectStore } from "@/store/projectStore";

export const AddTaskDialogProjectSelectList = () => {
  const localProjects = useProjectStore((state) => state.localProjects);
  return (
    <>
      {localProjects.map((item, index) => (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      ))}
    </>
  );
};
