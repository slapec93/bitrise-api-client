// Code generated by go-swagger; DO NOT EDIT.

package build_artifact

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/bitrise-io/bitrise-api-client/models"
)

// ArtifactUpdateReader is a Reader for the ArtifactUpdate structure.
type ArtifactUpdateReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ArtifactUpdateReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewArtifactUpdateOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewArtifactUpdateBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewArtifactUpdateUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewArtifactUpdateNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewArtifactUpdateInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewArtifactUpdateOK creates a ArtifactUpdateOK with default headers values
func NewArtifactUpdateOK() *ArtifactUpdateOK {
	return &ArtifactUpdateOK{}
}

/*ArtifactUpdateOK handles this case with default header values.

OK
*/
type ArtifactUpdateOK struct {
	Payload *models.V0ArtifactShowResponseModel
}

func (o *ArtifactUpdateOK) Error() string {
	return fmt.Sprintf("[PATCH /apps/{app-slug}/builds/{build-slug}/artifacts/{artifact-slug}][%d] artifactUpdateOK  %+v", 200, o.Payload)
}

func (o *ArtifactUpdateOK) GetPayload() *models.V0ArtifactShowResponseModel {
	return o.Payload
}

func (o *ArtifactUpdateOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0ArtifactShowResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArtifactUpdateBadRequest creates a ArtifactUpdateBadRequest with default headers values
func NewArtifactUpdateBadRequest() *ArtifactUpdateBadRequest {
	return &ArtifactUpdateBadRequest{}
}

/*ArtifactUpdateBadRequest handles this case with default header values.

Bad Request
*/
type ArtifactUpdateBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ArtifactUpdateBadRequest) Error() string {
	return fmt.Sprintf("[PATCH /apps/{app-slug}/builds/{build-slug}/artifacts/{artifact-slug}][%d] artifactUpdateBadRequest  %+v", 400, o.Payload)
}

func (o *ArtifactUpdateBadRequest) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ArtifactUpdateBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArtifactUpdateUnauthorized creates a ArtifactUpdateUnauthorized with default headers values
func NewArtifactUpdateUnauthorized() *ArtifactUpdateUnauthorized {
	return &ArtifactUpdateUnauthorized{}
}

/*ArtifactUpdateUnauthorized handles this case with default header values.

Unauthorized
*/
type ArtifactUpdateUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ArtifactUpdateUnauthorized) Error() string {
	return fmt.Sprintf("[PATCH /apps/{app-slug}/builds/{build-slug}/artifacts/{artifact-slug}][%d] artifactUpdateUnauthorized  %+v", 401, o.Payload)
}

func (o *ArtifactUpdateUnauthorized) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ArtifactUpdateUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArtifactUpdateNotFound creates a ArtifactUpdateNotFound with default headers values
func NewArtifactUpdateNotFound() *ArtifactUpdateNotFound {
	return &ArtifactUpdateNotFound{}
}

/*ArtifactUpdateNotFound handles this case with default header values.

Not Found
*/
type ArtifactUpdateNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ArtifactUpdateNotFound) Error() string {
	return fmt.Sprintf("[PATCH /apps/{app-slug}/builds/{build-slug}/artifacts/{artifact-slug}][%d] artifactUpdateNotFound  %+v", 404, o.Payload)
}

func (o *ArtifactUpdateNotFound) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ArtifactUpdateNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArtifactUpdateInternalServerError creates a ArtifactUpdateInternalServerError with default headers values
func NewArtifactUpdateInternalServerError() *ArtifactUpdateInternalServerError {
	return &ArtifactUpdateInternalServerError{}
}

/*ArtifactUpdateInternalServerError handles this case with default header values.

Internal Server Error
*/
type ArtifactUpdateInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ArtifactUpdateInternalServerError) Error() string {
	return fmt.Sprintf("[PATCH /apps/{app-slug}/builds/{build-slug}/artifacts/{artifact-slug}][%d] artifactUpdateInternalServerError  %+v", 500, o.Payload)
}

func (o *ArtifactUpdateInternalServerError) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ArtifactUpdateInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
