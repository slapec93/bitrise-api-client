package main

import (
	"fmt"

	httptransport "github.com/go-openapi/runtime/client"
	apiclient "github.com/bitrise-io/bitrise-api-client/client"
	"github.com/bitrise-io/bitrise-api-client/example/activity"
	"github.com/bitrise-io/bitrise-api-client/example/user"
)

func main() {
	apiToken := "{YOUR API KEY}"
	apiKeyTokenAuth := httptransport.APIKeyAuth("Authorization", "header", fmt.Sprintf("token %s", apiToken))
	apiClient := apiclient.Default
	user.ProfileShow(apiClient, apiKeyTokenAuth)
	activity.List(apiClient, apiKeyTokenAuth)
	activity.ListNextPage(apiClient, apiKeyTokenAuth)
}
