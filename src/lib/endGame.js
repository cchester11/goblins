export default function endGame (navigate) {
      // uses useNavigate to navigate to the game over component
      const navToEndGame = () => {
            navigate('/endgame')
      };

      navToEndGame();
};