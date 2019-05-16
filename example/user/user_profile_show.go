package user

import (
	"github.com/bitrise-io/go-utils/log"

	apiclient "github.com/bitrise-io/bitrise-api-client/client"
	"github.com/go-openapi/runtime"
)

// ProfileShow ...
func ProfileShow(apiClient *apiclient.Bitrise, apiKeyTokenAuth runtime.ClientAuthInfoWriter) {
	response, err := apiClient.User.UserProfile(nil, apiKeyTokenAuth)
	log.Printf("%#v", response.Payload.Data)
	log.Printf("%s", err)
}
