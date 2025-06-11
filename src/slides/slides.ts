import { AboutMe } from "./IntroAndOutro/AboutMe";
import { FirstPage } from "./IntroAndOutro/FirstPage";
import { FoldingPaper } from "./PaperAirplane/FoldingPaper";
import { Introduction } from "./IntroAndOutro/Introduction";
import { PaperPlaneGuide } from "./PaperAirplane/PaperPlaneGuide";
import { RenderPaper } from "./PaperAirplane/RenderPaper";
import { MakeThingsMove } from "./PaperAirplane/MakeThingsMove";
import { DottedLine } from "./PaperAirplane/DottedLine";
import { FoldPaper } from "./PaperAirplane/FoldPaper";
import { FlappyBirdClone } from "./Games/FlappyBirdClone";
import { CreateAGameClass } from "./BuildAGame/CreateAGameClass";
import { Minesweeper } from "./Games/Minesweeper";
import { AdventureMan } from "./Games/AdventureMan";
import { WhereToBegin } from "./BuildAGame/WhereToBegin";
import { CreateAPlayer } from "./BuildAGame/CreateAPlayer";
import { AddPlayerToGame } from "./BuildAGame/AddPlayerToGame";
import { UserInput } from "./BuildAGame/UserInput";
import { AddUserInputToGame } from "./BuildAGame/AddUserInputToGame";
import { Physics } from "./BuildAGame/Physics";
import { AddPhysicsToGame } from "./BuildAGame/AddPhysicsToGame";
import { Platforms } from "./BuildAGame/Platforms";
import { AddPlatformsToGame } from "./BuildAGame/AddPlatformsToGame";
import { AddCollisionDetectionToGame } from "./BuildAGame/AddCollisionDetectionToGame";
import { Sprites } from "./MakeItPretty/Sprites";
import { AnimateSprite } from "./MakeItPretty/AnimateSprite";
import { AddSpriteToGame } from "./MakeItPretty/AddSpriteToGame";
import { Monsters } from "./Monsters/Monsters";
import { Unit } from "./Monsters/Unit";
import { KillMonster } from "./Monsters/KillMonster";
import { Lives } from "./Monsters/Lives";
import { Invulnerability } from "./Monsters/Invulnerability";
import { Death } from "./Monsters/Death";
import { Pointers } from "./BeforeTheGame/Pointers";
import { Classes } from "./BeforeTheGame/Classes";
import { PrivateFields } from "./BeforeTheGame/PrivateProperties";
import { PointersExample } from "./BeforeTheGame/PointersExample";
import { ClassInhericance } from "./BeforeTheGame/ClassInheritance";
import { WeCanMakeAGame } from "./Games/WeCanMakeAGame";
import { LetsBuildAGame } from "./BeforeTheGame/LetsBuildAGame";
import { EmptyWebProject } from "./BuildAGame/EmptyWebProject";
import { TheEnd } from "./IntroAndOutro/TheEnd";
import { Demo } from "./IntroAndOutro/Demo";
import { Transform } from "./AdvancedCanvasFeatures/Transform";
import { BlendMode } from "./AdvancedCanvasFeatures/BlendMode";
import { UseOffScreenCanvas } from "./AdvancedCanvasFeatures/OffScreenCanvas";

const slideArray = [
  FirstPage,
  AboutMe,
  Introduction,
  PaperPlaneGuide,
  FoldingPaper,
  RenderPaper,
  MakeThingsMove,
  DottedLine,
  FoldPaper,
  WeCanMakeAGame,
  FlappyBirdClone,
  Minesweeper,
  AdventureMan,
  LetsBuildAGame,
  Classes,
  ClassInhericance,
  PrivateFields,
  Pointers,
  PointersExample,
  WhereToBegin,
  EmptyWebProject,
  CreateAGameClass,
  CreateAPlayer,
  AddPlayerToGame,
  UserInput,
  AddUserInputToGame,
  Physics,
  AddPhysicsToGame,
  Platforms,
  AddPlatformsToGame,
  AddCollisionDetectionToGame,
  Sprites,
  AnimateSprite,
  AddSpriteToGame,
  Unit,
  Monsters,
  KillMonster,
  Lives,
  Invulnerability,
  Death,
  Transform,
  BlendMode,
  UseOffScreenCanvas,
  Demo,
  TheEnd,
];

export interface SlideProps {
  subStep: number;
}

const slides: Record<number, React.FC<SlideProps>> = {};
slideArray.forEach((slide, index) => {
  slides[index] = slide;
});

export { slides };
