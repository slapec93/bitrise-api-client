// Code generated by go-swagger; DO NOT EDIT.

package builds

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	models "github.com/bitrise-io/bitrise-api-client/models"
)

// BuildListReader is a Reader for the BuildList structure.
type BuildListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *BuildListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewBuildListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewBuildListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewBuildListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewBuildListNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewBuildListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewBuildListOK creates a BuildListOK with default headers values
func NewBuildListOK() *BuildListOK {
	return &BuildListOK{}
}

/*BuildListOK handles this case with default header values.

OK
*/
type BuildListOK struct {
	Payload *models.V0BuildListResponseModel
}

func (o *BuildListOK) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/builds][%d] buildListOK  %+v", 200, o.Payload)
}

func (o *BuildListOK) GetPayload() *models.V0BuildListResponseModel {
	return o.Payload
}

func (o *BuildListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0BuildListResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewBuildListBadRequest creates a BuildListBadRequest with default headers values
func NewBuildListBadRequest() *BuildListBadRequest {
	return &BuildListBadRequest{}
}

/*BuildListBadRequest handles this case with default header values.

Bad Request
*/
type BuildListBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *BuildListBadRequest) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/builds][%d] buildListBadRequest  %+v", 400, o.Payload)
}

func (o *BuildListBadRequest) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *BuildListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewBuildListUnauthorized creates a BuildListUnauthorized with default headers values
func NewBuildListUnauthorized() *BuildListUnauthorized {
	return &BuildListUnauthorized{}
}

/*BuildListUnauthorized handles this case with default header values.

Unauthorized
*/
type BuildListUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *BuildListUnauthorized) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/builds][%d] buildListUnauthorized  %+v", 401, o.Payload)
}

func (o *BuildListUnauthorized) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *BuildListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewBuildListNotFound creates a BuildListNotFound with default headers values
func NewBuildListNotFound() *BuildListNotFound {
	return &BuildListNotFound{}
}

/*BuildListNotFound handles this case with default header values.

Not Found
*/
type BuildListNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *BuildListNotFound) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/builds][%d] buildListNotFound  %+v", 404, o.Payload)
}

func (o *BuildListNotFound) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *BuildListNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewBuildListInternalServerError creates a BuildListInternalServerError with default headers values
func NewBuildListInternalServerError() *BuildListInternalServerError {
	return &BuildListInternalServerError{}
}

/*BuildListInternalServerError handles this case with default header values.

Internal Server Error
*/
type BuildListInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *BuildListInternalServerError) Error() string {
	return fmt.Sprintf("[GET /apps/{app-slug}/builds][%d] buildListInternalServerError  %+v", 500, o.Payload)
}

func (o *BuildListInternalServerError) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *BuildListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
