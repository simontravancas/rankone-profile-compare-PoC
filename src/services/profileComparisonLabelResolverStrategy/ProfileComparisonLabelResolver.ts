import ProfileComparisonLabelResolverStrategy from "./ProfileComparisonLabelResolverStrategy"

export default class ProfileComparisonLabelResolver {

    labelStrategy: ProfileComparisonLabelResolverStrategy
    constructor(labelStrategy: ProfileComparisonLabelResolverStrategy) {
        this.labelStrategy = labelStrategy
    }

    getLabelsAndValues(mainDataSet: any, selfDataSet: any, maxNumberOfFields: any) {
        return this.labelStrategy.getLabelsAndValues(mainDataSet, selfDataSet, maxNumberOfFields);
    }
}