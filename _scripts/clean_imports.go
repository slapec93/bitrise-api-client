package main

import (
	"bufio"
	"os"
	"strings"

	"github.com/bitrise-io/go-utils/log"
)

func contains(a []string, x string) bool {
	for _, n := range a {
		if x == n {
			return true
		}
	}
	return false
}

func main() {
	file, err := os.OpenFile("./client/bitrise_client.go", os.O_RDWR, 0)
	if err != nil {
		log.Errorf("Failed to open ./client/bitrise_client.go: %s", err.Error())
	}

	imports := []string{}
	scanner := bufio.NewScanner(file)
	importBlockStarted := false
	for scanner.Scan() {
		nextImport := scanner.Text()
		if nextImport == "import (" {
			importBlockStarted = true
		}
		if !importBlockStarted {
			imports = append(imports, nextImport)
			continue
		}
		if importBlockStarted && !contains(imports, nextImport) {
			imports = append(imports, nextImport)
		}
		if nextImport == ")" {
			importBlockStarted = false
		}
	}

	if err := scanner.Err(); err != nil {
		log.Errorf("Error happend during scan: %s", err.Error())
	}
	file.Close()

	file, err = os.Create("./client/bitrise_client.go")
	if err != nil {
		log.Errorf("Failed to re-create bitrise_client.go: %s", err.Error())
	}
	defer file.Close()

	_, err = file.Write([]byte(strings.Join(imports, "\n")))
	if err != nil {
		log.Errorf("Failed to write bitrise_client.go: %s", err.Error())
	}
}
