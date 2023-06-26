type TimeEstimationProps = {
    optimisticGuess: number | undefined;
    realisticGuess: number | undefined;
    pessimisticGuess: number | undefined;
};

export const calculateTimeEstimation = (values: TimeEstimationProps) => {
    // get values for PERT estimation
    const { optimisticGuess, realisticGuess, pessimisticGuess } = values;
    if (!optimisticGuess || !realisticGuess || !pessimisticGuess) {
        return;
    };
    // PERT estimation logic
    const estimation = Math.ceil((optimisticGuess + (4 * realisticGuess) + pessimisticGuess) / 6);
    // PERT estimation with standard deviation for external goals
    const standardDeviation = ( pessimisticGuess - optimisticGuess ) / 6;
    const externalEstimation = Math.ceil(estimation + (2 * standardDeviation));

    return { estimation, externalEstimation }
};