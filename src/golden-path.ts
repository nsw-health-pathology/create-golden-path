import { showTitleAndBanner } from './utils/logger.util';
import { goldenPathQuestion } from './questions/golden-path.question';
import { GoldenPathValue } from './models/choice';
import { angularActions, awsCdkActions } from './actions';

export async function GoldenPath(): Promise<any> {
    showTitleAndBanner();

    const goldenPathAnswer = await goldenPathQuestion();
    console.log(goldenPathAnswer);

    if (goldenPathAnswer.goldenPath === GoldenPathValue.AWS_CDK) {
        return await awsCdkActions();
    } else if (goldenPathAnswer.goldenPath === GoldenPathValue.ANGULAR) {
        return await angularActions();
    }
}
