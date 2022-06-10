const CardTitle = ({ num }) => {
   const itemsTitle = [
      "Decision Making",
      "Meetings and connections",
      "Norms and ‘rules’",
      "Priorities, Purpose, Values",
      "Behaviours",
      "Rituals",
      "Feedback",
      "Psychological Safety",
      "Truth",
      "Honesty",
   ];
   return <h3 className="heading heading--tertiary">{itemsTitle[num - 1]}</h3>;
};

export default CardTitle;
