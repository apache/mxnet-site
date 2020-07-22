

``mx.nd.amp.multicast``
==============================================

Description
----------------------

Cast function used by AMP, that casts its inputs to the common widest type.

It casts only between low precision float/FP32 and does not do anything for other types.



Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol[].                                       |
|                                        |                                                            |
|                                        | Weights                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``num.outputs``                        | int, required.                                             |
|                                        |                                                            |
|                                        | Number of input/output pairs to be casted to the widest    |
|                                        | type.                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``cast.narrow``                        | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Whether to cast to the narrowest type                      |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/amp_cast.cc#L71

