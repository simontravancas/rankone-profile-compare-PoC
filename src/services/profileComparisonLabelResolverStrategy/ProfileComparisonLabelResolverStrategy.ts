export default abstract class ProfileComparisonLabelResolverStrategy {
  abstract getLabelsAndValues(
    mainDataSet: any,
    selfDataSet: any,
    maxNumberOfFields: number
  ): any
}
