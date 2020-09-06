import tw, { css, styled, theme } from "twin.macro";

const ListsWrapper = styled.section(() => [
  tw`grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto mb-8`,
]);

const ListsItem = styled.article(() => [
  tw`w-full rounded-lg overflow-hidden shadow-lg`,
  tw`border-solid border border-gray-300`,
  tw`bg-white text-center`,
]);

export default function Listing() {
  const data = [
    "Lorem ipsum dolor sit amet, sea cu epicurei sadipscing, qui ei vivendo ancillae philosophia, at vix tibique omittam. Ne duis ferri nemore pro, mea ut adipisci senserit, id eam propriae apeirian. Mea nibh partem officiis eu, est natum paulo voluptaria an. Est an mollis delectus petentium. Ne nec semper impedit, eos petentium aliquando eu.",
    "Qui ex sumo tota democritum, pri vidit patrioque in. Cu sit solum lucilius, porro instructior est id. Ei movet nonumes nam. Ut pri brute pertinax, ea eos tritani consulatu consequuntur. Quando fabellas vim te, sea dolorum dissentiunt at, ne tation nemore vix.",
    "Vim in veniam theophrastus. Eu mel harum exerci, no affert aliquando complectitur eum. Audiam aperiam id sit. Usu ne essent elaboraret consectetuer, ea epicurei definiebas persequeris per. Ut aeque accusamus qui. Quando ceteros pericula at vix.",
    "Aperiri sapientem conclusionemque ne sit, ex sed brute prodesset. Per oratio delenit corpora ne. Mel nobis reprimique ei, nam cu iuvaret reprimique. Eu nisl diceret urbanitas vim, ei eam reque minim equidem, sed dolorem dignissim eu.",
  ];

  return (
    <>
      <ListsWrapper>
        {data.map((value, idx) => {
          return <ListsItem key={idx}>{value}</ListsItem>;
        })}
      </ListsWrapper>
    </>
  );
}
