

``mx.nd.LayerNorm``
======================================

Description
----------------------

Layer normalization.

Normalizes the channels of the input tensor by mean and variance, and applies a scale ``gamma`` as
well as offset ``beta``.

Assume the input has more than one dimension and we normalize along axis 1.
We first compute the mean and variance along this axis and then 
compute the normalized output, which has the same shape as input, as following:

.. math::

  out = \frac{data - mean(data, axis)}{\sqrt{var(data, axis) + \epsilon}} * gamma + beta

Both ``gamma`` and ``beta`` are learnable parameters.

Unlike BatchNorm and InstanceNorm,  the *mean* and *var* are computed along the channel dimension.

Assume the input has size *k* on axis 1, then both ``gamma`` and ``beta``
have shape *(k,)*. If ``output_mean_var`` is set to be true, then outputs both ``data_mean`` and
``data_std``. Note that no gradient will be passed through these two outputs.

The parameter ``axis`` specifies which axis of the input shape denotes
the 'channel' (separately normalized groups).  The default is -1, which sets the channel
axis to be the last item in the input shape.





Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data to layer normalization                          |
+----------------------------------------+------------------------------------------------------------+
| ``gamma``                              | NDArray-or-Symbol                                          |
|                                        | gamma array                                                |
+----------------------------------------+------------------------------------------------------------+
| ``beta``                               | NDArray-or-Symbol                                          |
|                                        | beta array                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int, optional, default='-1'.                               |
|                                        |                                                            |
|                                        | The axis to perform layer normalization. Usually, this     |
|                                        | should be be axis of the channel dimension. Negative       |
|                                        | values means indexing from right to                        |
|                                        | left.                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``eps``                                | float, optional, default=9.99999975e-06.                   |
|                                        |                                                            |
|                                        | An `epsilon` parameter to prevent division by 0.           |
+----------------------------------------+------------------------------------------------------------+
| ``output.mean.var``                    | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Output the mean and std calculated along the given axis.   |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/layer_norm.cc#L156

