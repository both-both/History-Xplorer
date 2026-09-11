import { useFetch } from "../../../hooks/useFetch";
import type { SinceResponse } from "./SinceModule.types";
import { endpoints } from "../../../data/Endpoints";
import { Loader } from "../../elements/Loader/Loader";
import { TodaymoduleStyled } from "../TodayModule/TodayModule.Styled";
import { EventCard } from "../EventCard/EventCard";
import { useDate } from "../../../Context/useDate";

export const SinceModule = () => {
  const { since } = useDate();
  const { data, isLoading, error } = useFetch<SinceResponse>(endpoints.today);

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

  const events = data?.data.Events.filter(
    (event) => Number(event.year) >= Number(since),
  );
  return (
    <TodaymoduleStyled>
      {events?.map((event, i) => (
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
