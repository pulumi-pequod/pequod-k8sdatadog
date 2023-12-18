// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class StackSettings extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'stackmgmt:index:StackSettings';

    /**
     * Returns true if the given object is an instance of StackSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StackSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StackSettings.__pulumiType;
    }


    /**
     * Create a StackSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: StackSettingsArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["driftManagement"] = args ? args.driftManagement : undefined;
            resourceInputs["teamAssignment"] = args ? args.teamAssignment : undefined;
            resourceInputs["ttlTime"] = args ? args.ttlTime : undefined;
        } else {
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StackSettings.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a StackSettings resource.
 */
export interface StackSettingsArgs {
    /**
     * Drift management setting for refresh or correction.
     */
    driftManagement?: pulumi.Input<string>;
    /**
     * Team to which the stack should be assigned.
     */
    teamAssignment?: pulumi.Input<string>;
    /**
     * Time to live time setting.
     */
    ttlTime?: pulumi.Input<number>;
}