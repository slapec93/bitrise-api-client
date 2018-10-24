package main

import (
	"io/ioutil"
	"net/http"
	"os"

	"github.com/bitrise-io/go-utils/log"
)

func main() {
	request, err := http.NewRequest("GET", "https://bitrise-team.github.io/bitrise-api/docs/swagger/swagger.json", nil)
	if err != nil {
		log.Errorf("Failed to initialize a new request: %s", err.Error())
	}
	client := http.Client{}
	response, err := client.Do(request)
	if err != nil {
		log.Errorf("Failed to fetch swagger.json: %s", err.Error())
	}

	var swaggerData []byte
	defer response.Body.Close()

	if response.StatusCode == http.StatusOK {
		responseBody, err := ioutil.ReadAll(response.Body)
		if err != nil {
			log.Errorf("Failed to read response body: %s", err.Error())
		}
		swaggerData = responseBody
	}
	f, err := os.Create("swagger.json")
	if err != nil {
		log.Errorf("Failed to create swagger.json: %s", err.Error())
	}
	defer f.Close()
	_, err = f.Write(swaggerData)
	if err != nil {
		log.Errorf("Failed to save swagger.json: %s", err.Error())
	}
}
