package user

import (
	"github.com/bitrise-io/go-utils/log"

	"github.com/go-openapi/runtime"
	apiclient "github.com/slapec93/bitrise-api-client/client"
)

// ProfileShow ...
func ProfileShow(apiClient *apiclient.Bitrise, apiKeyTokenAuth runtime.ClientAuthInfoWriter) {
	response, err := apiClient.User.UserProfile(nil, apiKeyTokenAuth)
	log.Printf("%#v", response.Payload.Data)
	log.Printf("%s", err)
}
