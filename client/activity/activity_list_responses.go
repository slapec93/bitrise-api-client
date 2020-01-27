// Code generated by go-swagger; DO NOT EDIT.

package activity

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/bitrise-io/bitrise-api-client/models"
)

// ActivityListReader is a Reader for the ActivityList structure.
type ActivityListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ActivityListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewActivityListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewActivityListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewActivityListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewActivityListNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewActivityListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewActivityListOK creates a ActivityListOK with default headers values
func NewActivityListOK() *ActivityListOK {
	return &ActivityListOK{}
}

/*ActivityListOK handles this case with default header values.

OK
*/
type ActivityListOK struct {
	Payload *models.V0ActivityEventListResponseModel
}

func (o *ActivityListOK) Error() string {
	return fmt.Sprintf("[GET /me/activities][%d] activityListOK  %+v", 200, o.Payload)
}

func (o *ActivityListOK) GetPayload() *models.V0ActivityEventListResponseModel {
	return o.Payload
}

func (o *ActivityListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0ActivityEventListResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewActivityListBadRequest creates a ActivityListBadRequest with default headers values
func NewActivityListBadRequest() *ActivityListBadRequest {
	return &ActivityListBadRequest{}
}

/*ActivityListBadRequest handles this case with default header values.

Bad Request
*/
type ActivityListBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ActivityListBadRequest) Error() string {
	return fmt.Sprintf("[GET /me/activities][%d] activityListBadRequest  %+v", 400, o.Payload)
}

func (o *ActivityListBadRequest) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ActivityListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewActivityListUnauthorized creates a ActivityListUnauthorized with default headers values
func NewActivityListUnauthorized() *ActivityListUnauthorized {
	return &ActivityListUnauthorized{}
}

/*ActivityListUnauthorized handles this case with default header values.

Unauthorized
*/
type ActivityListUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ActivityListUnauthorized) Error() string {
	return fmt.Sprintf("[GET /me/activities][%d] activityListUnauthorized  %+v", 401, o.Payload)
}

func (o *ActivityListUnauthorized) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ActivityListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewActivityListNotFound creates a ActivityListNotFound with default headers values
func NewActivityListNotFound() *ActivityListNotFound {
	return &ActivityListNotFound{}
}

/*ActivityListNotFound handles this case with default header values.

Not Found
*/
type ActivityListNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ActivityListNotFound) Error() string {
	return fmt.Sprintf("[GET /me/activities][%d] activityListNotFound  %+v", 404, o.Payload)
}

func (o *ActivityListNotFound) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ActivityListNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewActivityListInternalServerError creates a ActivityListInternalServerError with default headers values
func NewActivityListInternalServerError() *ActivityListInternalServerError {
	return &ActivityListInternalServerError{}
}

/*ActivityListInternalServerError handles this case with default header values.

Internal Server Error
*/
type ActivityListInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *ActivityListInternalServerError) Error() string {
	return fmt.Sprintf("[GET /me/activities][%d] activityListInternalServerError  %+v", 500, o.Payload)
}

func (o *ActivityListInternalServerError) GetPayload() *models.ServiceStandardErrorRespModel {
	return o.Payload
}

func (o *ActivityListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
