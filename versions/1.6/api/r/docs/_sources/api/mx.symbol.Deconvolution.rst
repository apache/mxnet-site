

``mx.symbol.Deconvolution``
======================================================

Description
----------------------

Deconvolution:Computes 1D or 2D transposed convolution (aka fractionally strided convolution) of the input tensor. This operation can be seen as the gradient of Convolution operation with respect to its input. Convolution usually reduces the size of the input. Transposed convolution works the other way, going from a smaller input to a larger output while preserving the connectivity pattern.

Usage
----------

.. code:: r

	mx.symbol.Deconvolution(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input tensor to the deconvolution operation.               |
+----------------------------------------+------------------------------------------------------------+
| ``weight``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Weights representing the kernel.                           |
+----------------------------------------+------------------------------------------------------------+
| ``bias``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Bias added to the result after the deconvolution           |
|                                        | operation.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``kernel``                             | Shape(tuple), required.                                    |
|                                        |                                                            |
|                                        | Deconvolution kernel size: (w,), (h, w) or (d, h, w). This |
|                                        | is same as the kernel size used for the corresponding      |
|                                        | convolution                                                |
+----------------------------------------+------------------------------------------------------------+
| ``stride``                             | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | The stride used for the corresponding convolution: (w,),   |
|                                        | (h, w) or (d, h, w). Defaults to 1 for each                |
|                                        | dimension.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``dilate``                             | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | Dilation factor for each dimension of the input: (w,), (h, |
|                                        | w) or (d, h, w). Defaults to 1 for each                    |
|                                        | dimension.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``pad``                                | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | The amount of implicit zero padding added during           |
|                                        | convolution for each dimension of the input: (w,), (h, w)  |
|                                        | or (d, h, w). ``(kernel-1)/2`` is usually a good choice.   |
|                                        | If `target_shape` is set, `pad` will be ignored and a      |
|                                        | padding that will generate the target shape will be used.  |
|                                        | Defaults to no                                             |
|                                        | padding.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``adj``                                | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | Adjustment for output shape: (w,), (h, w) or (d, h, w). If |
|                                        | `target_shape` is set, `adj` will be ignored and computed  |
|                                        | accordingly.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``target.shape``                       | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | Shape of the output tensor: (w,), (h, w) or (d, h, w).     |
+----------------------------------------+------------------------------------------------------------+
| ``num.filter``                         | int (non-negative), required.                              |
|                                        |                                                            |
|                                        | Number of output filters.                                  |
+----------------------------------------+------------------------------------------------------------+
| ``num.group``                          | int (non-negative), optional, default=1.                   |
|                                        |                                                            |
|                                        | Number of groups partition.                                |
+----------------------------------------+------------------------------------------------------------+
| ``workspace``                          | long (non-negative), optional, default=512.                |
|                                        |                                                            |
|                                        | Maximum temporary workspace allowed (MB) in                |
|                                        | deconvolution.This parameter has two usages. When CUDNN is |
|                                        | not used, it determines the effective batch size of the    |
|                                        | deconvolution kernel. When CUDNN is used, it controls the  |
|                                        | maximum temporary storage used for tuning the best CUDNN   |
|                                        | kernel when `limited_workspace` strategy is                |
|                                        | used.                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``no.bias``                            | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | Whether to disable bias parameter.                         |
+----------------------------------------+------------------------------------------------------------+
| ``cudnn.tune``                         | {None, 'fastest', 'limited_workspace', 'off'},optional,    |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | Whether to pick convolution algorithm by running           |
|                                        | performance                                                |
|                                        | test.                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``cudnn.off``                          | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Turn off cudnn for this layer.                             |
+----------------------------------------+------------------------------------------------------------+
| ``layout``                             | {None, 'NCDHW', 'NCHW', 'NCW', 'NDHWC', 'NHWC'},optional,  |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | Set layout for input, output and weight. Empty for default |
|                                        | layout, NCW for 1d, NCHW for 2d and NCDHW for 3d.NHWC and  |
|                                        | NDHWC are only supported on                                |
|                                        | GPU.                                                       |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


