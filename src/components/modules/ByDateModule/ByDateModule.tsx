import { useDate } from "../../../Context/useDate";
import { endpoints } from "../../../data/Endpoints";
import { useFetch } from "../../../hooks/useFetch";
import { Loader } from "../../elements/Loader/Loader";
import { EventCard } from "../EventCard/EventCard";
import { TodaymoduleStyled } from "../TodayModule/TodayModule.Styled";
import type { ByDateResponse } from "./ByDateModule.types";

export const ByDateModule = () => {
  const { month, day } = useDate();
  const { data, isLoading, error } = useFetch<ByDateResponse>(
    endpoints.byDate(day, month),
  );

  if (isLoading) {
    return (
      <Loader
        visible={isLoading}
        height="80"
        width="80"
        color="#C7BD8D"
        ariaLabel="grid"
        radius="10"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <TodaymoduleStyled>
      {data?.data.Events.map((event, i) => (
        <EventCard
          key={`${event.year}-${i}`}
          year={event.year}
          text={event.text}
          links={event.links}
        />
      ))}
    </TodaymoduleStyled>
  );
};
