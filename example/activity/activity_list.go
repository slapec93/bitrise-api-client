package activity

import (
	"github.com/bitrise-io/go-utils/pointers"

	"github.com/bitrise-io/go-utils/log"

	"github.com/go-openapi/runtime"
	apiclient "github.com/bitrise-io/bitrise-api-client/client"
	"github.com/bitrise-io/bitrise-api-client/client/activity"
)

// List ...
func List(apiClient *apiclient.Bitrise, apiKeyTokenAuth runtime.ClientAuthInfoWriter) {
	params := activity.NewActivityListParams()
	params.SetLimit(pointers.NewInt64Ptr(2))
	response, _ := apiClient.Activity.ActivityList(params, apiKeyTokenAuth)
	log.Donef("Activity list ...")
	for _, anActivity := range response.Payload.Data {
		log.Printf("%#v", anActivity)
	}
	log.Donef("Done ...")
}

// ListNextPage ...
func ListNextPage(apiClient *apiclient.Bitrise, apiKeyTokenAuth runtime.ClientAuthInfoWriter) {
	params := activity.NewActivityListParams()
	params.SetLimit(pointers.NewInt64Ptr(2))
	log.Donef("Activity list ...")
	response, _ := apiClient.Activity.ActivityList(params, apiKeyTokenAuth)
	for _, anActivity := range response.Payload.Data {
		log.Printf("%#v", anActivity)
	}
	log.Donef("Done ...")
	log.Donef("Activity list next ...")
	params.SetNext(&response.Payload.Paging.Next)
	params.SetLimit(pointers.NewInt64Ptr(2))
	response, _ = apiClient.Activity.ActivityList(params, apiKeyTokenAuth)
	for _, anActivity := range response.Payload.Data {
		log.Printf("%#v", anActivity)
	}
	log.Donef("Done ...")
}
