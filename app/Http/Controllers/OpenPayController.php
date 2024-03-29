<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Exception;
use Openpay\Data\Openpay;
use OpenpayApiError;
use OpenpayApiAuthError;
use OpenpayApiRequestError;
use OpenpayApiConnectionError;
use OpenpayApiTransactionError;
use Illuminate\Http\JsonResponse;

require_once '../vendor/autoload.php';

class OpenPayController extends Controller
{
    public function store(Request $request)
    {
        try {
            // create instance OpenPay
            $openpay = Openpay::getInstance(env('OPENPAY_ID'), env('OPENPAY_SK'),'PE');

            Openpay::setProductionMode(env('OPENPAY_PRODUCTION_MODE'));

            // create object customer
            $customer = array(
                'name' => $request->name,
                'last_name' => $request->last_name,
                'email' => $request->email
            );

            // create object charge
            $chargeRequest =  array(
                'method' => 'card',
                'source_id' => $request->amount,
                'amount' => env('OPENPAY_AMOUNT'),
                'currency' => 'PEN',
                'description' => 'Cargo de ejemplo Programación JJE',
                'device_session_id' => $request->deviceSessionId,
                'customer' => $customer
            );

            $charge = $openpay->charges->create($chargeRequest);

            return response()->json([
                'data' => $charge->id
            ]);

        } catch (OpenpayApiTransactionError $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId()
                ]
            ]);
        } catch (OpenpayApiRequestError $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId()
                ]
            ]);
        } catch (OpenpayApiConnectionError $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId()
                ]
            ]);
        } catch (OpenpayApiAuthError $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId()
                ]
            ]);
        } catch (OpenpayApiError $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId()
                ]
            ]);
        } catch (Exception $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId()
                ]
            ]);
        }
    }
}
