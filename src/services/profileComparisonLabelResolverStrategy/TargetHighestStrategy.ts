import ProfileComparisonLabelResolverStrategy from './ProfileComparisonLabelResolverStrategy'

export default class TargetHighestStrategy extends ProfileComparisonLabelResolverStrategy {
  getLabelsAndValues(
    mainDataSet: any,
    selfDataSet: any,
    maxNumberOfFields: number
  ) {
    const mainDataSetArray: Array<any> = []
    const selfDataSetArray: Array<any> = []
    Object.entries(mainDataSet).forEach((element) => {
      mainDataSetArray.push(element)
    })
    // @ts-ignore
    const processedMainDataSetArray = mainDataSetArray
      .sort((e1, e2) => e1[1] > e2[1])
      .slice(0, maxNumberOfFields)
    processedMainDataSetArray.forEach((element, idx) => {
      selfDataSetArray.push([element[0], selfDataSet[element[0]] || 0])
    })

    return {
      labels: processedMainDataSetArray.map((e) => e[0]),
      mainValues: processedMainDataSetArray.map((e) => e[1]),
      selfValues: selfDataSetArray.map((e) => e[1])
    }
  }
}
